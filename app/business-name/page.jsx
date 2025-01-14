"use client";
import DomainStatus from "@/components/DomainStatus";
import Sidebar from "@/components/Sidebar";
import { useQueryContext } from "@/context/BusinessNameContext";
import { generatePrompt } from "@/helpers/function";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useRef, useState } from "react";

const BusinessName = () => {
  const { query, updateQuery } = useQueryContext();
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const observeDiv = useRef();
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const [domainDialogOpen, setDomainDialogOpen] = useState(false);
  const [domain, setDomain] = useState();

  const fetchBusinessName = async () => {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const inputs = { ...query, names };

      const prompt = generatePrompt(inputs);

      const result = await model.generateContent(prompt);
      const unfilteredJsonString = result.response.text();
      const jsonString = unfilteredJsonString.replace(/```json|```/g, "");
      const jsonData = JSON.parse(jsonString);
      if (jsonData && jsonData.names) {
        const newNames = jsonData.names;
        setNames([...names, ...newNames]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinessName();
  }, [page]);

  useEffect(() => {
    setNames([]);
    fetchBusinessName();
  }, [refresh]);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const oberserver = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-10px",
      threshold: [0, 0.5, 1],
    });

    if (observeDiv.current) oberserver.observe(observeDiv.current);

    return () => {
      if (observeDiv.current) oberserver.unobserve(observeDiv);
    };
  }, []);

  const getDomainStatus = (businessname) => {
    const domain =
      businessname.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() + ".com";

    setDomain(domain);
    setDomainDialogOpen(!domainDialogOpen);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-10">
      <h1 className="mt-32 text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center border-b pb-5 md:pb-8 border-gray-500">
        Business Name
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-10">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Sidebar refresh={refresh} setRefresh={setRefresh} />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {names &&
              names.length > 0 &&
              names.map((singleName, index) => {
                return (
                  <div
                    onClick={() => getDomainStatus(singleName)}
                    key={index}
                    className="border border-gray-600 rounded p-3 md:p-4 cursor-pointer text-white hover:bg-primary hover:text-black transition flex justify-center items-center text-center"
                  >
                    {singleName}
                  </div>
                );
              })}
          </div>
          {loading && (
            <div className="text-center text-primary pt-5 text-lg">
              Loading...
            </div>
          )}
          <div ref={observeDiv} className="h-2"></div>
        </div>
      </div>

      <DomainStatus
        open={domainDialogOpen}
        setOpen={setDomainDialogOpen}
        domain={domain}
      />
    </div>
  );
};

export default BusinessName;

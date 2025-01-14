"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { nameStyle, Randomness } from "@/helpers/constant";
import { useQueryContext } from "@/context/BusinessNameContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Sidebar = ({ refresh, setRefresh }) => {
  const { query, updateQuery } = useQueryContext();

  const handleNameStyle = (nameStyle) => {
    updateQuery({ nameStyle });
  };
  const handleRandomness = (randomness) => {
    updateQuery({ randomness });
  };

  const handleFormField = (e) => {
    updateQuery({ [e.target.name]: e.target.value });
  };

  const generateBusinessName = () => {
    setRefresh(!refresh);
  };

  return (
    <Card className="bg-transparent rounded-md pt-3 border-gray-600 w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <CardContent className="p-4 md:p-6 lg:p-8">
        {/* Name Style Section */}
        <div className="mb-5">
          <h4 className="text-white text-xl font-semibold mb-3">Name Style</h4>
          <RadioGroup
            value={query?.nameStyle || "Auto"}
            onValueChange={handleNameStyle}
            className="space-y-2"
          >
            {nameStyle.map((singleNameStyle) => (
              <Label
                key={`namestyle${singleNameStyle.id}`}
                htmlFor={`namestyle${singleNameStyle.id}`}
                className="flex gap-3 items-center"
              >
                <RadioGroupItem
                  value={singleNameStyle.name}
                  id={`namestyle${singleNameStyle.id}`}
                />
                <p className="text-md font-semibold mb-1 text-white">
                  {singleNameStyle.name}
                </p>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Randomness Section */}
        <div className="mb-5">
          <h4 className="text-white text-xl font-semibold mb-3">Randomness</h4>
          <RadioGroup
            value={query?.randomness || "Medium"}
            onValueChange={handleRandomness}
            className="space-y-2"
          >
            {Randomness.map((singleRandomness) => (
              <Label
                key={`randomness${singleRandomness.id}`}
                htmlFor={`randomness${singleRandomness.id}`}
                className="flex gap-3 items-center"
              >
                <RadioGroupItem
                  value={singleRandomness.name}
                  id={`randomness${singleRandomness.id}`}
                />
                <p className="text-md font-semibold mb-1 text-white">
                  {singleRandomness.name}
                </p>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Keyword and Description Inputs */}
        <div>
          <div className="mb-3">
            <Label className="text-white">Keyword</Label>
            <Input
              value={query?.keyword || ""}
              name="keyword"
              onChange={handleFormField}
              placeholder="Enter a keyword"
              className="text-white w-full bg-[#202020] border-gray-700"
            />
          </div>
          <div className="mb-3">
            <Label className="text-white">Description</Label>
            <Input
              value={query?.description || ""}
              onChange={handleFormField}
              name="description"
              placeholder="Enter a description"
              className="text-white w-full bg-[#202020] border-gray-700"
            />
          </div>

          {/* Generate Button */}
          <Button
            onClick={generateBusinessName}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold mt-3 py-2 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Generate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sidebar;

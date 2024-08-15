import React from "react";
import { hero } from "../portfolio";
import Container from "./Container";
import Button from "./ui/Button";

const Hero = () => {
  const { heading, decription, email, imgUrl, CV } = hero;
  return (
    <div className="flex pt-[10vh] ">
      <Container className=" flex  items-center  max-w-[800px]">
        <div className="w-[50%] pt-[100px] space-y-4">
          <h1 className="text-4xl font-semibold">{heading}</h1>
          <p className="text-black/60 max-w-[600px] ">{decription}</p>
          <div className="space-x-2">
            <Button variant={"primary"} size={"md"}>
              <a href={`mailto:${email}`} className="w-full h-hull">
                {" "}
                Reach out
              </a>
            </Button>
            <Button variant={"secondary"} size={"md"}>
              <a className="w-full h-hull" href={`http://${CV}`}>
                Read CV
              </a>
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex items-center mr-10 justify-center">
          <div className="w-full h-[500px] overflow-hidden  ">
            <img
              src={imgUrl}
              alt=""
              className="w-full h-full object-cover object-top aspect-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import { GithubIcon, WebIcon } from "@/components/Icons";
import TechnicalSheet from "@/components/TechnicalSheet";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import React from "react";

const PuberWebPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-80">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300 sm:flex-col sm:items-center sm:h-auto">
          <div className="w-100 h-100 flex flex-col justify-center items-center sm:mb-8">
            <div className="text-4xl font-semibold mb-2">Puber</div>
            <div className="flex w-full justify-between flex-row border-t border-gray-300">
              <div className="mt-1 text-sm">5th Nov 2018 - 12th Jan 2019</div>
              <div className="mt-1 text-sm">2 MONTHS</div>
            </div>
            <div className="flex w-50 justify-between mt-16">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://wonderful-visvesvaraya-af346f.netlify.app"}
                className="flex flex-col items-center">
                <WebIcon />
                <div className="text-xs text-center h-2">WEBSITE</div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/puber-client"}
                className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">CLIENT</div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/puber-server"}
                className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">SERVER</div>
              </a>
            </div>
          </div>
        </div>
        <TextBox
          title={"About this Project"}
          text={
            "Puber is my first clone project. I decided to clone Uber because I was interested in creating a two-sided marketplace and a location-based project. To deepen my understanding of Django and Python, I wanted to compare them with other languages like Express and Node.js. I read and wrote extensively, more than seven times, to gain a better understanding of how two-sided marketplace projects work and to learn about GraphQL."
          }
        />
        <GreyLine />
        <TechnicalSheet
          list={[
            "NodeJS",
            "Express",
            "GraphQL",
            "TypeORM",
            "React",
            "Apollo",
            "TypeScript",
            "Styled-Components",
            "GoogleMapAPI",
            "Heroku",
          ]}
        />
        <GreyLine />
        <AboutColors
          list={[
            {
              colorHex: "#C2C2C2",
              textColorHex: "#000",
            },
            {
              colorHex: "#F3F3F3",
              textColorHex: "#000",
            },
            {
              colorHex: "#000000",
              textColorHex: "#FFF",
            },
          ]}
        />
        <GreyLine />
        <TextBox
          title={"Live Chat with GraphQL Subscriptions"}
          text={
            "One of the exciting features of GraphQL is its ability to build real-time applications using GraphQL subscriptions. Here’s how I utilized subscriptions in GraphQL to build a real-time chat app with PostgreSQL, React, and Apollo."
          }
        />
        <div className="flex justify-center my-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://github.com/plusbeauxjours/puber-server/blob/752a721d037005cc962a08504ec31ed532a61234/src/api/Chat/SendChatMessage/SendChatMessage.resolvers.ts#L12"
            }
            className="flex flex-col items-center mx-2">
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://github.com/plusbeauxjours/puber-server/blob/752a721d037005cc962a08504ec31ed532a61234/src/api/Chat/MessageSubscription/MessageSubscription.resolvers.ts#L6"
            }
            className="flex flex-col items-center mx-2">
            <GithubIcon />
          </a>
        </div>
        <div className="my-24 flex flex-col justify-center items-center">
          <Image
            src={"/images/web/puber/puber_Subscription.gif"}
            className="max-w-full mb-4"
            width={800}
            height={1200}
            alt=""
          />
          <Image
            src={"/images/web/puber/puber_Subscription_Code.jpg"}
            className="max-w-full mb-4"
            width={800}
            height={1200}
            alt=""
          />
        </div>
        <GreyLine />

        <div className="flex flex-col items-center mt-24">
          <Image
            src={"/images/web/puber/puber_screenshot.jpg"}
            className="max-w-full mb-4"
            width={800}
            height={1200}
            alt=""
          />
          <Image
            src={"/images/web/puber/puber_video.gif"}
            className="max-w-full mb-4"
            width={800}
            height={1200}
            alt=""
          />
        </div>
        <GreyLine />
        <TextBox
          title={"Long Term Gains"}
          text={
            "I’ve fallen in love with GraphQL. It’s awesome—easy, simple, and powerful. I also love working with the Google Maps API and GraphQL subscriptions. Through this project, I realized when to use Django and when to use Node.js. The only thing I feel I missed was giving enough thought to the design."
          }
        />
      </div>
    </div>
  );
};

export default PuberWebPage;

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wds-ui/tabs";
import CopyButton from "../copy-button";
function PackagesManagerShell(props) {
  const { install } = props;

  return (
    <div>
      <Tabs defaultValue="npm" className="relative mb-20 ">
        <div className="flex items-center justify-between pb-3 w-fit ">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              title="npm"
              value="npm"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="40px"
                height="40px"
              >
                <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z" />
                <path
                  fill="#fff"
                  d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"
                />
              </svg>
            </TabsTrigger>
            <TabsTrigger
              title="yarn"
              value="yarn"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <svg
                width="30px"
                height="30px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#2c8ebb"
                  d="M99.24,80.71C94.9,80.76,91.1,83,87.89,85c-6,3.71-9,3.47-9,3.47l-.1-.17c-.41-.67,1.92-6.68-.69-13.84-2.82-7.83-7.3-9.72-6.94-10.32,1.53-2.59,5.36-6.7,6.89-14.36.91-4.64.67-12.28-1.39-16.28-.38-.74-3.78,1.24-3.78,1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6,7.61-6,7.61a14,14,0,0,0-11.71,4.5,9.64,9.64,0,0,1-3.85,2.27c-.41.14-.91.12-2.15,3.47C43.2,50,48.34,55.74,48.34,55.74s-6.13,4.33-8.4,9.72a24.78,24.78,0,0,0-1.75,11.68s-4.36,3.78-4.64,7.68a12.87,12.87,0,0,0,1.77,7.83,1.94,1.94,0,0,0,2.63.91s-2.9,3.38-.19,4.81c2.47,1.29,6.63,2,8.83-.19,1.6-1.6,1.92-5.17,2.51-6.63.14-.34.62.57,1.08,1a10,10,0,0,0,1.36,1s-3.9,1.68-2.3,5.51c.53,1.27,2.42,2.08,5.51,2.06,1.15,0,13.76-.72,17.12-1.53a4.33,4.33,0,0,0,2.61-1.46,63,63,0,0,0,15.49-7c4.74-3.09,6.68-3.93,10.51-4.84C103.64,85.54,103.43,80.64,99.24,80.71Z"
                ></path>
                <path
                  fill="#2c8ebb"
                  d="M64,2a62,62,0,1,0,62,62A62,62,0,0,0,64,2Zm37.3,87.83c-3.35.81-4.91,1.44-9.41,4.36a67,67,0,0,1-15.56,7.18,8.71,8.71,0,0,1-3.64,1.77c-3.81.93-16.88,1.63-17.91,1.63h-.24c-4,0-6.27-1.24-7.49-2.54-3.4,1.7-7.8,1-11-.69a5.55,5.55,0,0,1-3-3.9,6,6,0,0,1,0-2.06,6.66,6.66,0,0,1-.79-1A16.38,16.38,0,0,1,30,84.52c.29-3.73,2.87-7.06,4.55-8.83A28.56,28.56,0,0,1,36.61,64a26.82,26.82,0,0,1,6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42,1.17-3.11,2.13-4.84,4.24-5.58h0a6.84,6.84,0,0,0,2.51-1.34A17.65,17.65,0,0,1,60.34,31c.19-.48.41-1,.65-1.46,1.6-3.4,3.3-5.31,5.29-6a4.88,4.88,0,0,1,4.4.5c.65.43,1.48,1,3.9,6a4.69,4.69,0,0,1,2.85-.1,3.81,3.81,0,0,1,2.39,1.94c2.47,4.74,2.8,13.19,1.72,18.62a33.8,33.8,0,0,1-5.84,13.31,25.73,25.73,0,0,1,5.77,9.43,25.42,25.42,0,0,1,1.41,10.41A28.7,28.7,0,0,0,86,81.91c3.06-1.89,7.68-4.74,13.19-4.81a6.62,6.62,0,0,1,7,5.7A6.35,6.35,0,0,1,101.3,89.83Z"
                ></path>
              </svg>
            </TabsTrigger>
            <TabsTrigger
              title="pnpm"
              value="pnpm"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#f9ad00">
                  <path d="m30 10.75h-8.749v-8.75h8.749z" />
                  <path d="m20.374 10.75h-8.75v-8.75h8.75z" />
                  <path d="m10.749 10.75h-8.749v-8.75h8.749z" />
                  <path d="m30 20.375h-8.749v-8.75h8.749z" />
                </g>
                <path d="m20.374 20.375h-8.75v-8.75h8.75z" fill="#4e4e4e" />
                <path d="m20.374 30h-8.75v-8.75h8.75z" fill="#4e4e4e" />
                <path d="m30 30h-8.749v-8.75h8.749z" fill="#4e4e4e" />
                <path d="m10.749 30h-8.749v-8.75h8.749z" fill="#4e4e4e" />
              </svg>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="npm"
          className="relative w-full animate-in fade-in duration-500"
        >
          <CopyButton value={install?.npm} />
          <div className="w-full h-40 border  rounded-md  overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
            <pre>
              <code>{install?.npm}</code>
            </pre>
          </div>
        </TabsContent>

        <TabsContent
          value="yarn"
          className="relative w-full animate-in fade-in duration-500"
        >
          <CopyButton value={install?.yarn} />
          <div className="w-full  h-40 border rounded-md   overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
            <pre>
              <code>{install?.yarn}</code>
            </pre>
          </div>
        </TabsContent>
        <TabsContent
          value="pnpm"
          className="relative w-full animate-in fade-in duration-500"
        >
          <CopyButton value={install?.pnpm} />
          <div className="w-full rounded-md  h-40 border    overflow-hidden prose prose-pre:whitespace-pre-wrap  m-auto max-w-none">
            <pre>
              <code>{install?.pnpm}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default PackagesManagerShell;

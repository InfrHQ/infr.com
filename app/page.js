'use client';

import { ReactTerminal } from 'react-terminal';
import { TerminalContextProvider } from 'react-terminal';
import Image from 'next/image';
import { DiscordIcon, TwitterIcon, GithubIcon } from './icons';
import { useState } from 'react';
import Head from 'next/head';
import Footer from './components/Footer';

function App() {
  // Define commands here
  const [conversation, setConversation] = useState([]);

  const welcomeMessage = (
    <div>
      <Image src="/infr.png" width="100" height="100" />
      <h1 className="text-3xl font-bold">Welcome to Infr.</h1>

      <h2 className="text-xl font-bold">
        An open-source, machine-readable catalog of everything about you.
      </h2>
      <div className="flex  items-center mt-2 mb-2 ">
        <h1 className="text-m mr-3">Find us on</h1>
        <div className="flex space-x-2">
          <DiscordIcon className="h-6 w-6" />
          <GithubIcon className="h-6 w-6" />
          <TwitterIcon className="h-6 w-6" />
        </div>
      </div>
      <p>Ask away, what do you want to know?</p>
      <br></br>
    </div>
  );

  async function defaultHandler(command, other) {
    try {
      // Add the user's message to the conversation

      let text = command + ' ' + other;

      let resp = await fetch(
        `/api?text=${encodeURIComponent(
          JSON.stringify([...conversation, { role: 'user', content: text }])
        )}`
      );
      let data = await resp.json();
      let message = data.message;

      // Add the bot's & users response to the conversation
      setConversation([
        ...conversation,
        { role: 'user', content: text },
        message,
      ]);

      return message?.content;
    } catch (e) {
      console.log(e);
      return "Sorry, I don't understand. Try 'help' for a list of commands.";
    }
  }

  return (
    <div>
      <Head>
        <title>Infr - An open-source, machine-readable catalog of you</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Infr allows you to stream your data including your location, health data, screen recordings, social media posts, and more to your personal, self-hosted server. It's completely open-source and empowers the development of advanced AI applications."
        />
        <meta
          name="keywords"
          content="Infr, open-source, self-hosted, personal data, AI, Machine-readable catalog, MemoryAI, data streaming, Jarvis, JOI, Blade Runner 2049"
        />
      </Head>

      <div className="h-full w-full bg-gray-900 h-screen">
        <TerminalContextProvider>
          <ReactTerminal
            welcomeMessage={welcomeMessage}
            defaultHandler={defaultHandler}
          />
        </TerminalContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;

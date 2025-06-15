//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const summarize_commandEval: EvalFunction = {
    name: 'summarize_command Evaluation',
    description: 'Evaluates command execution and output summarization',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please execute the command 'ls -l' in '/usr/bin' and summarize the output if there are too many lines to display.");
        return JSON.parse(result);
    }
};

const summarize_filesEval: EvalFunction = {
  name: 'summarize_files Tool Evaluation',
  description: 'Evaluates the summarize_files tool by asking it to summarize multiple files',
  run: async () => {
    const result = await grade(openai("gpt-4"), "Please summarize the contents of README.md and LICENSE from the /usr/src/app directory.");
    return JSON.parse(result);
  }
};

const summarize_directoryEval: EvalFunction = {
    name: 'summarize_directoryEval',
    description: 'Evaluates the directory summarization functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please summarize the structure of the 'src' directory in /User/Documents, including subdirectories. Provide an overview of the folder hierarchy and file counts.");
        return JSON.parse(result);
    }
};

const summarize_textEval: EvalFunction = {
    name: 'summarize_textEval',
    description: 'Evaluates the summarize_text tool by providing text to summarize',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please summarize the following text: 'User log indicates multiple errors in the code during deployment. The content type is log output.'");
        return JSON.parse(result);
    }
};

const get_full_contentEval: EvalFunction = {
    name: 'get_full_content Tool Evaluation',
    description: 'Evaluates the retrieval of the full content for a given summary ID',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Retrieve the full content for summary ID: 12345");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [summarize_commandEval, summarize_filesEval, summarize_directoryEval, summarize_textEval, get_full_contentEval]
};
  
export default config;
  
export const evals = [summarize_commandEval, summarize_filesEval, summarize_directoryEval, summarize_textEval, get_full_contentEval];
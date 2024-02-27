import { useEffect, useRef, useState } from "react";

const paragraph = () => {
  const sentences = [
    `With so many different marketing and sales platforms available to companies, it's no wonder that marketers are turning to artificial intelligence (AI) to help them manage their campaigns. AI can help create more effective campaigns by bringing together all the different aspects of a campaign, from customer segmentation to media and creative optimization to automating follow-up emails and messages. In a similar way, sales teams are using AI tools to close more deals by using machine learning to understand what makes each lead or account unique, allowing sales reps to go back-and-forth with prospects in ways that will be most effective for them. By using AI tools like these, companies can streamline their processes and experience better results. Generate complete paragraphs for free with our AI Paragraph Generator that quickly builds unique content based on your instructions.`
  ];
  
  const divref= useRef();
  const [length, setLength] = useState();
  const [para, setPara] = useState("nothing bro");

  useEffect(()=>{
    if(length>0){
      const newpara = sentences[0].split(' ')
      const paragraph= newpara.slice(0,length).join(' ');
      setPara(paragraph);
    }
    console.log('rendered')
  },[length])

  return (
    <div
      className={`flex flex-col justify-center items-center w-[100vw] h-[100vh] p-32 gap-4 text-xl`}
    >
      <div className="flex justify-center w-[50%]">
        <input
          className="bg-gray-200 p-3 w-full"
          type="text"
          placeholder="Enter the number of words"
          ref={divref}
        />
        <button
          className="px-6 py-3 bg-black text-white rounded active:bg-blue-500"
          onClick={()=>setLength(divref.current.value)}
        >
          Generate
        </button>
      </div>

      <div className="bg-yellow-400 p-4 rounded-md font-semibold">{para}</div>
    </div>
  )
}

export default paragraph
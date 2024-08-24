import {Pencil,DollarSign,Ship} from "lucide-react"
export const Informations = () => {
    return (
      <section className="w-full py-16 bg-[#E11D48] mt-10">
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto text-center justify-around gap-8 px-4">
                <div className="flex flex-col items-center gap-2 w-full md:w-[350px]">
                    <Pencil className="w-8 h-8 text-white"/>
                    <h2 className="text-white mt-2 mb-2 text-xl font-semibold">MDX Based</h2>
                    <p className="text-white text-lg">YouCode is based on MDX. You can write your courses in Markdown and React.</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-full md:w-[350px]">
                    <DollarSign className="w-8 h-8 text-white"/>
                    <h2 className="text-white mt-2 mb-2 text-xl font-semibold">Free to use</h2>
                    <p className="text-white text-lg">You want to publish your courses for free? YouCode is free to use.</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-full md:w-[350px]">
                    <Ship className="w-8 h-8 text-white"/>
                    <h2 className="text-white mt-2 mb-2 text-xl font-semibold">NextReact Project</h2>
                    <p className="text-white text-lg">Re-build this app from scratch in <span className="font-bold underline cursor-pointer">NextReact</span></p>
                </div>
        </div>
      </section>
    );
  };
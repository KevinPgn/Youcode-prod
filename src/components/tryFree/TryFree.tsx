import { Button } from "../ui/button"

export const TryFree = () => {
  return <section className="max-w-[1200px] mx-auto px-4 py-20 mb-5">
    <div className="flex items-center flex-col justify-center gap-4">
        <h1 className="text-4xl bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-red-400 to-pink-600">Try it ! It's free</h1>
        <Button className="bg-[#E11D48] hover:bg-[#E11D48]/80 text-white font-bold text-xl p-8 uppercase">Build Your First Course</Button>
    </div>
  </section>
}
import AvatarCircles from "@/components/homePage/magicui/avatar-circles"
import Image from "next/image"

const avatarUrls = [
    "https://avatars.githubusercontent.com/u/1?v=4",
    "https://avatars.githubusercontent.com/u/2?v=4",
    "https://avatars.githubusercontent.com/u/3?v=4",
    "https://avatars.githubusercontent.com/u/4?v=4",
    "https://avatars.githubusercontent.com/u/5?v=4",
    "https://avatars.githubusercontent.com/u/6?v=4",
    "https://avatars.githubusercontent.com/u/7?v=4",
]

export const Hero = () => {
  return <section className="max-w-[1200px] mx-auto mt-10 px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-5 w-full lg:w-[600px]">
            <h1 className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent text-center lg:text-left">
                Create courses in seconds
            </h1>
            <p className="text-white text-xl md:text-2xl font-bold text-center lg:text-left">YouCode is the YouTube of education. You will create online courses in seconds.</p>

            <div className="flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start">
                <AvatarCircles numPeople={99} avatarUrls={avatarUrls}/>
                <div className="flex flex-col text-yellow-400 items-center md:items-start">
                    <h2 className="text-xl mb-1 font-bold">+500 teachers trust us.</h2>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <Image src="/thumbnail.jpg" alt="thumbnail" width={500} height={500} className="rounded-lg w-full max-w-[500px] h-auto" />
    </div>
  </section>
}
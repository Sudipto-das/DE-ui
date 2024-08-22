import { useState } from "react"
import { QuizHeader } from "./QuizHeader"
import { useNavigate } from "react-router-dom"


const Quiz = () => {
  const [knowledge, setKnowledge] = useState('beginner')
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/choose-room')
  }
  return <>
    <QuizHeader
      heading={"How much do you know about Interior design?"}
      subheading={"Decisions are hard pick as many as you want."}
      display={true}
      onClick={handleClick }
    />
    <div className="flex justify-center items-center w-full  ">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))] gap-[1rem] w-10/12 mx-auto my-4 lg:mt-24">
        <div
          className={`relative cursor-pointer duration-100 border-[3px] py-4 rounded-lg ${knowledge === "beginner"
            ? " border-[#FFD166]"
            : "border-transparent"
            }`}
          onClick={() => setKnowledge("beginner")}
        >
          {knowledge === "beginner" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#49a835" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
          ) : null}
          <div className="text-center">
            <img
              width={500}
              height={500}
              src="/quiz/beginner.png"
              alt="Beginner"
              className="mx-auto w-fit h-fit"
            />
            <p className="font-semibold text-lg text-black mt-5">
              I&apos;m Begginer
            </p>
            <p className="text-slate-700 mt-3">
              Don&apos;t worry we got your back.
            </p>
          </div>
        </div>

        <div
          className={`relative cursor-pointer duration-100 border-[3px] py-4 rounded-lg ${knowledge === "dabbled"
            ? " border-[#FFD166]"
            : "border-transparent"
            }`}
          onClick={() => setKnowledge("dabbled")}
        >
          {knowledge === "dabbled" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#49a835" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
          ) : null}
          <div className="text-center">
            <img
              width={500}
              height={500}
              src="/quiz/dabbled.png"
              alt="Dabbled"
              className="mx-auto w-fit h-fit"
            />
            <p className="font-semibold text-lg text-black mt-5">
              I&apos;ve dabbled
            </p>
            <p className="text-slate-700 mt-3">
              Don&apos;t worry we got your back.
            </p>
          </div>
        </div>

        <div
          className={`relative cursor-pointer duration-100 border-[3px] py-4 rounded-lg ${knowledge === "pro" ? " border-[#FFD166]" : "border-transparent"
            }`}
          onClick={() => setKnowledge("pro")}
        >
          {knowledge === "pro" ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#49a835" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
          ) : null}
          <div className="text-center">
            <img
              width={500}
              height={500}
              src="/quiz/pro.png"
              alt="Pro"
              className="mx-auto w-fit h-fit"
            />
            <p className="font-semibold text-lg text-black mt-5">
              I&apos;m a pro
            </p>
            <p className="text-slate-700 mt-3">
              Great. We&apos;d love to see your style.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Quiz
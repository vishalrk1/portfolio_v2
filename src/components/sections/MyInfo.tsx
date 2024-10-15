import { Download } from "lucide-react";
import ShimmerButton from "../magicui/shimmer-button";
import Button from "../Button";
import { Link } from "react-router-dom";
import { SocialsData } from "../../lib/SocialsData";
import WordFadeIn from "../magicui/word-fade-in";

const MyInfo = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full min-h-screen  md:px-80 md:py-16">
      <div className="h-full w-full flex flex-col justify-center items-start gap-4 ">
        <div className="w-full flex flex-row justify-between items-start gap-2">
          <div className="flex flex-col gap-3">
            <WordFadeIn
              words="Hi, I'm Raina"
              delay={0.3}
              className="text-white font-bold text-3xl md:text-7xl"
            />
            <p data-aos="fade-in" className="text-sm md:text-xl">
              Ex-SDE Intern @ Jio <br /> Final Year BTech CSE Core <br />{" "}
              Vellore Institute of Technology, Chennai
            </p>
          </div>
          <img
            data-aos="fade-in"
            data-aos-delay={100}
            src="https://scontent.fmaa1-4.fna.fbcdn.net/v/t1.6435-9/78947585_1214465095425864_4121425349948997632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=8IQp1GDR1XcQ7kNvgEhb1j2&_nc_ht=scontent.fmaa1-4.fna&_nc_gid=AFDHsXEifqQzy11wCeyCu_z&oh=00_AYAcTP0q9e5pxdiG-UHP_jbi6GYvPgpToo3ycdIF_HzzJg&oe=67164CE6"
            alt=""
            className="h-20 md:h-40 w-20 md:w-40 rounded-full"
          />
        </div>

        <div className="">
          <p
            data-aos="fade-in"
            data-aos-delay={100}
            className="text-xs md:text-lg text-neutral-400"
          >
            👨‍💻 Skilled in software development and user experience.
            <br />
            🔧 Proficient in C++, Python, SQL, React and TailwindCSS.
            <br />
            📊 Focused on scalable, flexible applications.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex gap-2">
            {SocialsData.map(({ icon: Icon, name, url }, index) => {
              return (
                <Link to={url} target="_blank">
                  <div data-aos="fade-in" data-aos-delay={300 * index}>
                    <Button
                      key={name}
                      className="h-10 md:h-14 w-10 md:w-14"
                      onClick={() => {
                        console.log(url);
                      }}
                    >
                      <Icon size={20} />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
          <ShimmerButton
            data-aos="fade-in"
            data-aos-delay={1500}
            className="shadow-2xl my-3 md:mx-4`"
          >
            <span className="py-2 h-3 w-full md:w-max   md:py-3 flex md:gap-2 items-center justify-center whitespace-pre-wrap text-center text-xs md:text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              <Download /> Resume
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;

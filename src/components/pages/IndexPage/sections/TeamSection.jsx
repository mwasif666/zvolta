import { SmartLink } from "../../IndexPage.shared.jsx";
export function TeamSection() {
  return (
    <section id="team-section" className="hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 relative flex flex-col justify-center">
        <div className="text-center mb-16 shrink-0">
          <h2 className="text-3xl md:text-5xl 3xl:text-6xl font-display font-bold leading-tight max-w-7xl mx-auto text-zinc-900 tracking-tight">
            With a team moving electric forward{" "}
            <br className="hidden md:block" />
            using simple tools and a lot of care.
          </h2>
        </div>
        <div
          className="team-list w-full border-t border-black/10"
          id="team-accordion-wrapper"
        >
          <div className="team-member border-b border-black/10 overflow-hidden relative">
            <div className="team-header flex justify-between items-center py-6 cursor-pointer group">
              <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#16a34a] transition-colors">
                Nashit Iqbal
              </h3>
              <span className="text-sm font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                Founder
              </span>
            </div>
            <div className="team-content overflow-hidden h-0 opacity-0">
              <div className="pb-8 pt-4">
                <div className="bg-[#022c22] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-2xl text-white">
                  <div className="w-full md:w-[320px] h-[380px] bg-white/10 rounded-3xl shrink-0 relative overflow-hidden group/img">
                    <img
                      src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                      alt="Nashit Iqbal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                  </div>
                  <div className="relative pl-0 md:pl-4 max-w-3xl">
                    <i className="bi bi-quote text-7xl text-[#16a34a] absolute -top-10 -left-8 opacity-30" />
                    <p className="text-3xl md:text-4xl 3xl:text-5xl font-display font-bold leading-tight">
                      Who makes things look intentional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-member border-b border-black/10 overflow-hidden relative">
            <div className="team-header flex justify-between items-center py-6 cursor-pointer group">
              <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#16a34a] transition-colors">
                Anusha Shahid
              </h3>
              <span className="text-sm font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                Founder
              </span>
            </div>
            <div className="team-content overflow-hidden h-0 opacity-0">
              <div className="pb-8 pt-4">
                <div className="bg-[#022c22] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center shadow-2xl text-white">
                  <div className="w-full md:w-[320px] h-[380px] bg-white/10 rounded-3xl shrink-0 relative overflow-hidden group/img">
                    <img
                      src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                      alt="Anusha"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
                  </div>
                  <div className="relative pl-0 md:pl-4 max-w-3xl">
                    <i className="bi bi-quote text-7xl text-[#16a34a] absolute -top-10 -left-8 opacity-30" />
                    <p className="text-3xl md:text-4xl 3xl:text-5xl font-display font-bold leading-tight">
                      who makes sure things feel right
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-member border-b border-black/10 overflow-hidden relative">
            <div className="team-header flex justify-between items-center py-6 cursor-pointer group">
              <h3 className="text-3xl md:text-5xl font-bold group-hover:text-[#16a34a] transition-colors">
                The Team
              </h3>
              <span className="text-sm font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100">
                See All Members
              </span>
            </div>
            <div className="team-content overflow-hidden h-0 opacity-0">
              <div className="pb-8 pt-4">
                <SmartLink
                  href="/team"
                  className="relative block w-full h-[550px] bg-[#022c22] rounded-[2.5rem] overflow-hidden group/card shadow-2xl isolate"
                >
                  <div className="absolute inset-0 grid grid-cols-5 gap-3 p-3 opacity-40 group-hover/card:opacity-20 transition-opacity duration-500">
                    <div className="relative overflow-hidden h-full rounded-2xl bg-white/5">
                      <div className="animate-marquee-up flex flex-col gap-3 w-full">
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden h-full rounded-2xl bg-white/5 mt-8">
                      <div className="animate-marquee-down flex flex-col gap-3 w-full">
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                      </div>
                    </div>
                    <div />
                    <div className="relative overflow-hidden h-full rounded-2xl bg-white/5">
                      <div
                        className="animate-marquee-up flex flex-col gap-3 w-full"
                        style={{
                          animationDelay: "-5s",
                        }}
                      >
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden h-full rounded-2xl bg-white/5 mt-8">
                      <div
                        className="animate-marquee-down flex flex-col gap-3 w-full"
                        style={{
                          animationDelay: "-5s",
                        }}
                      >
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Nashit_q5zunh.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anusha_vzwcmd.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                        <img
                          src="https://res.cloudinary.com/dk4bqjm38/image/upload/v1770808499/ZV_-_Anila_tpqzqx.png"
                          className="w-full aspect-[3/4] object-cover rounded-xl"
                          alt="Member"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 bg-gradient-to-r from-[#022c22]/10 via-[#022c22]/90 to-[#022c22]/10">
                    <h4 className="text-4xl md:text-7xl font-display font-bold text-white mb-4 drop-shadow-xl">
                      Meet the
                      <br />
                      Whole Team
                    </h4>
                    <span className="text-emerald-400 font-mono text-sm md:text-base uppercase tracking-[0.2em] mb-8 bg-[#022c22]/80 px-4 py-1 rounded-full border border-emerald-500/20">
                      10+ Passionate Builders
                    </span>
                    <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-[-45deg]">
                      <i className="bi bi-arrow-right text-3xl" />
                    </div>
                  </div>
                </SmartLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Page() {
    return (
        <div className="flex flex-col h-screen ">

            <div>
                <Header />
            </div>

            <div className="my-10 place-self-center lg:w-8/12 w-11/12"  >

                <div className="border-2 border-blue-600 bg-blue-100 rounded-lg h-14 w-fit content-center">
                    <span className="inline-block w-96 text-center text-3xl font-bold">Adatvédelmi nyilatkozat</span>
                </div>

                <div className="border-2 border-blue-600 bg-blue-100 rounded-lg mt-5">
                    <div className="text-lg mx-5 my-5 gap-2 grid indent-10">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor felis metus. Cras lobortis convallis turpis a dignissim. Ut ut tellus ut magna elementum pharetra. Suspendisse tincidunt, purus sed dapibus porta, tortor tortor elementum ante, vel lobortis urna dolor vitae odio. Fusce viverra lacinia vestibulum. Donec odio lacus, suscipit vitae feugiat a, elementum non nibh. Phasellus eleifend luctus risus sed convallis. Pellentesque mollis bibendum magna ut semper. Maecenas dictum tortor nulla, sed luctus est consequat in. Proin dignissim vitae ligula vel euismod.
                        </p>

                        <p>
                            Duis scelerisque, velit vitae ullamcorper aliquam, justo felis varius dolor, sed fermentum dui enim ut mauris. Vivamus euismod malesuada faucibus. Vivamus luctus nunc lacinia dignissim gravida. Proin a porta ipsum, at blandit eros. Quisque quis sem sem. Etiam varius congue nibh id tempor. Etiam ultrices suscipit rutrum. Mauris eget urna porttitor, blandit leo sit amet, congue elit. Mauris luctus mattis lorem viverra lobortis. Integer mattis placerat congue. Proin ultrices libero ut euismod elementum. Phasellus ultricies gravida ex, quis dapibus urna. Proin tortor massa, rhoncus id ultricies eget, pharetra sit amet leo. Praesent vehicula viverra urna, eu tincidunt libero posuere at. Aenean rhoncus accumsan cursus. Sed vel blandit urna.
                        </p>

                        <p>
                            Maecenas at velit elementum ex dictum eleifend id vel tortor. Integer venenatis orci venenatis pulvinar blandit. Suspendisse pulvinar, lacus in imperdiet porta, velit ante tempus lacus, vitae commodo dui enim eu mauris. Etiam quis placerat urna, eu laoreet urna. Donec vestibulum aliquet tempus. Donec efficitur vitae sapien sed condimentum. Vestibulum elementum, ex sed eleifend malesuada, dui nunc aliquam ipsum, in posuere lacus dolor vitae magna. Maecenas condimentum, nunc porta ullamcorper imperdiet, ipsum quam mollis nisl, sit amet pharetra purus lorem auctor quam. Ut mattis molestie mi, ac fermentum ligula euismod vestibulum. Nulla consectetur quam sit amet nulla ultrices hendrerit. Aenean molestie egestas libero eu sagittis. Donec euismod, ligula id vulputate tristique, massa nisl feugiat lorem, in aliquam ligula augue ut metus. Phasellus luctus augue eget lacus ullamcorper, in tristique tellus tincidunt. Vestibulum lacinia nibh auctor, consequat lorem sit amet, lacinia quam. Nulla porttitor porttitor viverra. Donec sit amet sapien augue.
                        </p>

                        <p>
                            Sed venenatis vel diam eget accumsan. Pellentesque dignissim quam eget fringilla cursus. Fusce eleifend vel libero id tristique. Phasellus varius ligula non vestibulum dapibus. Sed vitae nibh ut orci blandit convallis vitae ac tellus. Donec sit amet convallis mauris, et eleifend diam. In magna lectus, hendrerit sit amet nisi in, dapibus suscipit quam. Quisque tellus mi, lobortis ac euismod ac, lacinia at magna. Nulla facilisi. Suspendisse pulvinar nulla quam, sit amet efficitur ligula aliquet at. Vestibulum luctus tellus at augue rhoncus interdum. In malesuada dapibus ornare. Quisque blandit sed mauris in lobortis. Pellentesque in ipsum nulla. Duis congue ligula eu pharetra laoreet.
                        </p>

                        <p>
                            Nam id ipsum volutpat, elementum felis non, dapibus neque. Duis egestas magna sed ullamcorper ultrices. Duis vitae felis sagittis ligula pretium convallis sit amet bibendum ante. Suspendisse luctus, dolor eu egestas interdum, odio ligula luctus quam, sodales pharetra tortor odio sit amet mi. Sed est magna, euismod sed commodo in, finibus ac ligula. Mauris bibendum, neque ut molestie pulvinar, justo nisi posuere neque, et placerat elit felis et turpis. Donec venenatis dui justo, eget feugiat sem venenatis accumsan. Ut justo ligula, ultricies eget placerat et, ultrices at mauris.
                        </p>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>

        </div >
    )
}
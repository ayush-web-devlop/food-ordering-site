import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return (
        <section>
            <div className="flex items-center justify-between">
                <div>
                    <Image src={'/sallad1.png'} alt="sallad1" width={100} height={100} />
                </div>
                <div className="text-center">
                    <SectionHeaders
                    subHeader={'Check Out'}
                    mainHeader={'Menu'}
                    />
                </div>
                <div>
                    <Image src={'/sallad2.png'} alt="sallad2" width={100} height={100} />
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </section>
    );
}
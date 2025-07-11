import { Text } from "@radix-ui/themes";
import { BM } from "./BM";
import { Project } from "./Project";

export function SectionOpenUAS() {
  return (
    <Project
      title="OpenUAS"
      skills={["Git", "FPGA", "Ansys", "SOLIDWORKS", "C++", "Python"]}
      image="/images/open-uas-drone-640w.png"
      imageWidth="20rem"
    >
      <Text wrap="pretty">
        I designed and built a low-cost, open-source , fixed-wing UAS (~4 ft
        wingspan) for educational and research use. The aircraft supports
        modular sensor configurations, <BM>FPGA</BM> (field programmable gate
        array) -based health monitoring, and catapult launch designed to be
        fully 3D-printable with COTS (commercial off-the-shelf) parts. Focused
        on accessibility, documentation, and reusability, with CAD files, LaTeX
        manuals, and <BM>Git</BM> version control (hosted on GitHub). I worked
        as part of about a 14-person team under the <BM>avionics</BM> and{" "}
        <BM>electronics</BM> subteam.
      </Text>
    </Project>
  );
}

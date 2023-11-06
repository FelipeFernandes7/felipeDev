import { common } from "../../locale/pt/common";
import { SocialBox, RedirectTo } from "./styles";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
export function Social() {
  return (
    <SocialBox>
      <RedirectTo to={common.social.instagram} target="_blank">
        <BsInstagram size={"1.2rem"} />
      </RedirectTo>
      <RedirectTo to={common.social.linkedin} target="_blank">
        <BsLinkedin size={"1.2rem"} />
      </RedirectTo>
      <RedirectTo to={common.social.github} target="_blank">
        <BsGithub size={"1.2rem"} />
      </RedirectTo>
    </SocialBox>
  );
}

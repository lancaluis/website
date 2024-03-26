import { ICONS, SOCIAL_MEDIAS } from "../../constants/social-medias";
import './style.css'

export const SocialMedias = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {SOCIAL_MEDIAS.map(({ label, link }, i) => {
        const Icon = ICONS[label];
        return (
          <a
            key={i}
            href={link}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

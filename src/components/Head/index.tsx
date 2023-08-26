import { HeadContainer, HeadContent, HeadHeadlineStyled, HeadImage, HeadSocialItem, HeadSocialStyled } from './styles';
import { IHead, IHeadSocial } from './types';

export function Head({ img, imgAlt, children }: IHead) {
  return (
    <HeadContainer>
      {img &&
        <HeadImage>
          <img src={img} alt={imgAlt} />
        </HeadImage>
      }

      <HeadContent>
        {children}
      </HeadContent>
    </HeadContainer>
  );
}

export function HeadSocial({ items }: IHeadSocial) {
  return (
    <HeadSocialStyled>
      {items.map((item, index) => {
        if (item.label) {
          return (
            <HeadSocialItem key={index}>
              {item.icon}
              <span>{item.label}</span>
            </HeadSocialItem>
          );
        }
      })}
    </HeadSocialStyled>
  );
}

export function HeadHeadline({ children }: any) {
  return (
    <HeadHeadlineStyled>
      {children}
    </HeadHeadlineStyled>
  );
}
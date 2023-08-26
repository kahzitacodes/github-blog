import { Head, HeadHeadline, HeadSocial } from '../../../../components/Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';
import { UserContext } from '../../../../contexts/UserContext';

export function HeadUser() {
  const user = useContextSelector(UserContext, (context) => {
    return context.user;
  });

  const socialItems = [
    {
      label: user?.login || "",
      icon: <FontAwesomeIcon icon={faGithubAlt} />
    },
    {
      label: user?.company || "",
      icon: <FontAwesomeIcon icon={faBuilding} />
    },
    {
      label: user?.followers || "0" + ' seguidores',
      icon: <FontAwesomeIcon icon={faUserGroup} />
    }
  ];

  return (
    <Head img={user?.avatar_url}>
      <HeadHeadline>
        <h1>{user?.name}</h1>

        {user?.html_url &&
          <Link className="button-link" target="_blanket" to={user?.html_url}>
            Github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </Link>
        }

      </HeadHeadline>

      <p>{user?.bio}</p>

      <HeadSocial items={socialItems} />
    </Head>
  );
}
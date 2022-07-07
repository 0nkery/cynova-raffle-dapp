import { FC } from 'react';
import { Button, Link, Tooltip } from '@material-ui/core';
import { useHistory } from 'react-router';

import discordLogo from '../../assets/discord-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import Screen from '../../components/layout/Screen';
import { routes } from '../../router/routes';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';

require('./styles.css');



const AuctionScreen: FC = () => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };
  const { push } = useHistory();  

  return (
    <div  className={classes.root}>
        <div className="container">
        Coming Soon
        </div>
      <div className={classes.socialLinksContainer}>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Discord" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`https://discord.gg/cA5kGBbt`}
            >
              <img src={discordLogo} alt={'disord-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Twitter" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`https://twitter.com/cynova__`}
            >
              <img src={twitterLogo} alt={'twitter-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
{/*         <div className={classes.socialLinkContainer}>
          <Tooltip title="Litepaper" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`dRaffle-litepaper.pdf`}
            >
              <img src={documentLogo} alt={'document-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div> */}
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          color="secondary"
          size={'large'}
          onClick={() => push(routes.RAFFLES)}
          className={classes.mainButton}
        >
          Explore raffles
        </Button>
      </div>
      </div>
  )
}

const AuctionScreenWithLayout = () => (
  <Screen>
    <AuctionScreen />
  </Screen>
);

export default AuctionScreenWithLayout;
import { Component } from 'react'
import theme from 'src/themes/styled.theme'
import styled from '@emotion/styled'
import { Box, Flex } from 'theme-ui'
import ProfileButtonItem from './ProfileButtonItem'

interface IProps {
  isMobile?: boolean
}

const PanelButton = styled(Box)`
  padding-top: ${theme.space[1]}px;
  padding-bottom: ${theme.space[2]}px;
`

export class ProfileButtons extends Component<IProps> {
  render() {
    return (
      <>
        {this.props.isMobile ? (
          <Flex>
            <PanelButton>
              <ProfileButtonItem
                link={'/sign-in'}
                text="Login"
                variant="secondary"
                sx={{
                  fontWeight: 'bold',
                  marginRight: '10px',
                  display: 'block',
                  width: '100%',
                  fontSize: theme.fontSizes[1],
                }}
                isMobile={true}
              />
            </PanelButton>
            <PanelButton>
              <ProfileButtonItem
                link={'/sign-up'}
                text="Join"
                variant="colorful"
                isMobile={true}
                sx={{
                  display: 'inline-block',
                  width: '100%',
                  marginLeft: '100px',
                  fontSize: theme.fontSizes[1],
                }}
              />
            </PanelButton>
          </Flex>
        ) : (
          <>
            <ProfileButtonItem
              link={'/sign-in'}
              text="Login"
              variant="secondary"
              sx={{
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: theme.fontSizes[2],
              }}
            />
            <ProfileButtonItem
              link={'/sign-up'}
              text="Join"
              variant="colorful"
              sx={{ fontSize: theme.fontSizes[2] }}
            />
          </>
        )}
      </>
    )
  }
}

export default ProfileButtons

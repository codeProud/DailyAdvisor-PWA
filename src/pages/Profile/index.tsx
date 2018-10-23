import * as React from 'react';
import { connect } from 'react-redux';

import Button from 'components/Button';
import Image from 'components/Image';
import Tile from 'components/Tile';

import { logoutUser } from '../../auth/actions';
import { userUpgradeToCoach } from '../../user/actions';
import { user, userModeSettings } from '../../user/selectors';

import { imageStorage } from 'constants/urls';

import * as boxCoach from 'assets/boxCoach.png';

import * as S from './styled';

const Profile = props =>
    console.log(props) || (
        <S.Container>
            <S.UserData>
                <h1>Profile</h1>
                <Button onClick={props.logoutUser} content="Wyloguj" />
                {props.user && (
                    <Image
                        src={`${imageStorage}${props.user.profilePictureId}.png`}
                        alt="Person profile picture"
                        width="150"
                    />
                )}
            </S.UserData>

            {props.settings.isItCoach ? (
                <React.Fragment>
                    <Button url={`/main/advertisement/add`} value="Dodaj advertisement" />
                    <Button url={`/main/advertisement/show`} value="Wyświetl advertisement" />
                </React.Fragment>
            ) : null}

            {props.user && props.user.userType === 'client' ? (
                <div onClick={props.userUpgradeToCoach}>
                    <Tile width="344px" height="150px" backgroundImage={boxCoach} />
                </div>
            ) : null}
        </S.Container>
    );

function mapStateToProps(state: any): any {
    return {
        user: user(state),
        settings: userModeSettings(state),
    };
}

const mapDispatchToProps = { userUpgradeToCoach, logoutUser };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);

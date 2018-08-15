import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import Image from 'components/Image';

import { user } from '../../user/selectors';

import { imageStorage } from 'constants/urls';

const Profile = props => {
    return (
        <Fragment>
            <h1>Profile</h1>
            {props.user && (
                <Image
                    src={`${imageStorage}${props.user.profilePictureId}.png`}
                    alt="Person profile picture"
                    width="150"
                />
            )}
        </Fragment>
    );
};

function mapStateToProps(state) {
    return {
        user: user(state),
    };
}

export default connect(
    mapStateToProps,
    null,
)(Profile);

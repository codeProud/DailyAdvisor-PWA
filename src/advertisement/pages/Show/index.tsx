import * as React from 'react';
import { connect } from 'react-redux';

import { getAdvert, getAllAdverts } from '../../../advertisement/actions';
import { advert, adverts } from '../../../advertisement/selectors';

import TagLine from 'components/TagLine';

import * as S from './styled';

class Show extends React.Component<any, any> {
    public componentDidMount(): any {
        this.props.getAdvert();
        this.props.getAllAdverts();
    }

    public render(): JSX.Element {
        return (
            <S.Container>
                <TagLine first="show" second="advertisement" invertColor={true} />
            </S.Container>
        );
    }
}

const mapStateToProps = state => ({
    adverts: adverts(state),
    advert: advert(state),
});

const mapDispatchToProps = { getAllAdverts, getAdvert };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Show);

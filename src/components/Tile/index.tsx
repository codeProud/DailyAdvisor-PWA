import * as React from 'react';

import TagLine from 'components/TagLine';

import * as S from './styled';

const Tile = props => {
    return (
        <S.Container width={props.width} height={props.height} background={props.backgroundImage}>
            <TagLine first="became" second="coach" inverse="true" />
        </S.Container>
    );
};

export default Tile;

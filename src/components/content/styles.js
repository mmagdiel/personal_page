import styled from 'styled-components'
import {
    borders,
    borderColor,
    borderRadius,
    boxShadow,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    opacity,
    space,
    height,
    width,
    fontSize,
    color,
    flex,
    size,
    order,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    alignSelf,
    flexWrap,
    variant,
    alignItems,
    flexDirection,
    justifyContent,
} from 'styled-system'

const themed = key => props => props.theme[key]

export const Section = styled('section')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
        maxWidth,
        minWidth,
        maxHeight,
        minHeight,
        height,
        width,
        flex,
        space,
        order,
        alignSelf,
        flexWrap,
        flexDirection,
        alignItems,
        justifyContent,
        backgroundImage,
        backgroundPosition,
        backgroundSize,
        themed('Section')
)

Section.propTypes = {
    ...maxWidth.propTypes,
    ...minWidth.propTypes,
    ...maxHeight.propTypes,
    ...minHeight.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...order.propTypes,
    ...alignSelf.propTypes,
    ...flex.propTypes,
    ...space.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes,
    ...backgroundPosition.propTypes,
    ...backgroundImage.propTypes,
    ...backgroundSize.propTypes
}

export const Aside = styled('aside')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
        flex,
        space,
        order,
        alignSelf,
        flexWrap,
        flexDirection,
        alignItems,
        justifyContent,
        themed('Aside')
)

Aside.propTypes = {
    ...order.propTypes,
    ...alignSelf.propTypes,
    ...space.propTypes,
    ...flex.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}

export const Article = styled('article')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
        maxWidth,
        minWidth,
        maxHeight,
        minHeight,
        flex,
        space,
        order,
        alignSelf,
        flexWrap,
        flexDirection,
        alignItems,
        justifyContent,
        themed('Article')
)

Article.propTypes = {
    ...maxWidth.propTypes,
    ...minWidth.propTypes,
    ...maxHeight.propTypes,
    ...minHeight.propTypes,
    ...order.propTypes,
    ...alignSelf.propTypes,
    ...space.propTypes,
    ...flex.propTypes,
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}

const cards = variant({ key: 'cards' })

export const Media = styled('div')(
    {
        display: 'flex',
        boxSizing: 'border-box'
    },
    borders,
    borderColor,
    borderRadius,
    boxShadow,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    opacity,
    cards,
    space,
    width,
    fontSize,
    color,
    flex,
    size,
    order,
    alignSelf,
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
    themed('Media')
)

Media.propTypes = {
    ...borders.propTypes,
    ...borderColor.propTypes,
    ...borderRadius.propTypes,
    ...boxShadow.propTypes,
    ...backgroundImage.propTypes,
    ...backgroundSize.propTypes,
    ...backgroundPosition.propTypes,
    ...backgroundRepeat.propTypes,
    ...opacity.propTypes,
    ...cards.propTypes,
    
    ...size.propTypes,
    ...space.propTypes,
    ...width.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...flex.propTypes,
    ...order.propTypes,
    ...alignSelf.propTypes,

    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
}
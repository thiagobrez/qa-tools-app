import React from 'react';

import styled from 'styled-components/native';

interface TouchableProps {
  backgroundColor?: string,
  round?: boolean,
  onPress?: () => void
}

interface TextProps {
  color?: string,
}

interface OwnProps {
  text: string,
}

type Props = TouchableProps & TextProps & OwnProps;

const StyledTouchable = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }: TouchableProps) => backgroundColor || 'white'};
  border-radius: ${({ round }: TouchableProps) => `${round ? 20 : 0}px`};
  width: 100px;
  height: 50px;
`;

const StyledText = styled.Text`
  color: ${({ color }: TextProps) => color || 'black'};
  font-weight: bold;
`;

const Button = ({
  backgroundColor,
  color,
  round,
  text,
  onPress,
}: Props) => (
  <StyledTouchable backgroundColor={backgroundColor}
                   round={round}
                   onPress={onPress}
                   testID="click-me"
  >
    <StyledText color={color}>
      {text}
    </StyledText>
  </StyledTouchable>
);

export default Button;

import React from "react";


import { Container, Box, Title, Content } from './styles';

const Info = ({Ip, region, country, timezone, Isp}) => {
    
    return (
        <Container>
            <Box>
            <Title>
                IP Adress
            </Title>
            <Content>
                {Ip}
            </Content>
            </Box>
            <Box>    
            <Title>
                Location
            </Title>
            <Content>
                {`${region}, ${country}`}
            </Content>
            </Box>
            <Box>    
            <Title>
                Timezone
            </Title>
            <Content>
                {`UTC ${timezone}`}
            </Content>
            </Box>
            <Box>    
            <Title>
                ISP
            </Title>
            <Content>
                {Isp}
            </Content>
            </Box>
        </Container>    
    )
}

export default Info
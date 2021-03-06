import React from 'react'
import styled from 'styled-components'
import ButtonBottom from './ButtonBottom'
import Select from './Select'
import CardAnnouncement from './CardAnnouncement'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { mobile, table } from '../media/queries'

const MyAside = styled.aside`
    height: 440px;
    border: 1px #e0e0e0 solid; 
    border-radius: 10px;
    width: 95.41209503239741%;
    margin: 0 auto;

    ${table}{
        width: 100%;
    }
`

const MyContainer = styled.div`
    width: 100%; /*627 / 678 */
    height: 100%;
    margin: 0 auto;
`

const MySecondContainer = styled.div`
    width: 92.64%; /*579 / 625 */
    height: 90%;
    margin: 0 auto;
    padding-left: 2.48598130841121%;   /*24 /  535 */
    padding-right: 2.48598130841121%;
`

const MyH2Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3{
        color: ${({ theme }) => theme.H1ColorPrimary};
        font-weight: 600;
        font-size: 1.25rem;
    }
`

const MyP = styled.p`
    color: ${({ theme }) => theme.pColorPrimary};
    font-size: 0.75rem;
`

const MyOverflowContainer = styled.div`
    overflow-y: scroll;
    height: 300px;

    &::-webkit-scrollbar{
        background-color: transparent;
        color: #444;
    }

    ${mobile}{
        margin: 0;
        padding-left: 17px;
    }
`

const MyOtherDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`


const UpcomingSchedule = () => {
    return (
        <MyAside>
            <MyContainer>
                <MySecondContainer>
                    <MyH2Container>
                        <h3>Upcoming Schedule</h3>
                        <Select />
                    </MyH2Container>
                    <MyOverflowContainer>
                        <div>
                            <MyP>Priority</MyP>
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Review candidate applications" description="Today - 11.30 AM" icon={faBell} />
                        </div>
                        <MyOtherDiv>
                            <MyP>Other</MyP>
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Interview with candidates" description="Today - 10.30 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Short meeting with product designer from IT Departement" description="Today - 09.15 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Interview with candidates" description="Today - 10.30 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Short meeting with product designer from IT Departement" description="Today - 09.15 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Interview with candidates" description="Today - 10.30 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Short meeting with product designer from IT Departement" description="Today - 09.15 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Interview with candidates" description="Today - 10.30 AM" icon={faBell} />
                            <CardAnnouncement styles={{ cursor: "pointer" }} title="Short meeting with product designer from IT Departement" description="Today - 09.15 AM" icon={faBell} />
                        </MyOtherDiv>

                    </MyOverflowContainer>
                </MySecondContainer>
                <ButtonBottom title="Creat a New Schedule" />
            </MyContainer>
        </MyAside>
    );
}
export default UpcomingSchedule
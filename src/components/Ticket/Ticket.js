import React from "react"
import styled from 'styled-components'

const Ticket = ({ ticket }) => {
    const Wrapper = styled.div`
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        margin-bottom: 20px;
        margin-top: 20px;
        padding: 20px;
    `

    const Price = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #2196F3;
    `

    const PriceWrapper = styled.div`
        display: flex;
        justify-content: space-between;
    `

    console.log(ticket)
    const logo = `http://pics.avs.io/99/36/${ticket.carrier}.png`
    return (
        <Wrapper>
            <PriceWrapper>
                <Price>{ticket.price} P</Price>
                <div>
                    <img src={logo} alt=""/>
                </div>
            </PriceWrapper>

            <div>
                <div>

                </div>
            </div>


        </Wrapper>
    )
}

export default Ticket
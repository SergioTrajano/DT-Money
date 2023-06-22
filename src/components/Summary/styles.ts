import { css, styled } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;
`;

interface SummaryProps {
    variant?: "green";
}

export const SummaryCard = styled.div<SummaryProps>`
    padding: 2rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-600"]};

    header {
        color: ${(props) => props.theme["gray-300"]};

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        margin-top: 1rem;

        display: block;

        font-size: 2rem;
    }

    ${(props) =>
        props.variant === "green" &&
        css`
            background-color: ${props.theme["green-700"]};
        `}
`;

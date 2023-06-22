import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        padding: 1rem;
        border: 0;
        border-radius: 6px;
        background-color: ${(props) => props.theme["gray-900"]};

        color: ${(props) => props.theme["gray-300"]};

        &::placeholder {
            color: ${(props) => props.theme["gray-500"]};
        }
    }

    button {
        padding: 1rem;
        border: 0;
        border: 1px solid ${(props) => props.theme["green-300"]};
        border-radius: 6px;
        background-color: transparent;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        font-weight: bold;
        color: ${(props) => props.theme["green-300"]};

        cursor: pointer;

        &:not(:disabled):hover {
            border-color: ${(props) => props.theme["green-500"]};
            background-color: ${(props) => props.theme["green-500"]};

            color: ${(props) => props.theme.white};

            transition: border-color 0.2s, background-color 0.2s, color 0.2s;
        }

        &:disabled {
            opacity: 0.7;

            cursor: not-allowed;
        }
    }
`;

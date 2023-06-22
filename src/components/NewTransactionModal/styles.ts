import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { styled } from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;

    width: 100vw;
    height: 100vh;
    inset: 0;

    background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${(props) => props.theme["gray-800"]};

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            padding: 1rem;
            border-radius: 6px;
            border: 0;
            background-color: ${(props) => props.theme["gray-900"]};

            color: ${(props) => props.theme["gray-300"]};

            &::placeholder {
                color: ${(props) => props.theme["gray-500"]};
            }
        }

        button[type="submit"] {
            height: 58px;
            margin-top: 1.5rem;
            padding: 0 1.25rem;
            border: 0;
            border-radius: 6px;
            background-color: ${(props) => props.theme["green-500"]};

            font-weight: bold;
            color: ${(props) => props.theme.white};

            cursor: pointer;

            &:hover {
                background-color: ${(props) => props.theme["green-700"]};

                transition: background-color 0.2s;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    border: 0;
    background-color: transparent;

    line-height: 0;
    color: ${(props) => props.theme["gray-500"]};

    cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
    margin-top: 0.5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

const TransactionTypeRadioIconColors = {
    income: "green-300",
    outcome: "red-300",
};

const TrasactionTypeCheckedRadioBackgroundColor = {
    income: "green-500",
    outcome: "red-500",
};

interface TransactionTypeButtonProps {
    variant: keyof typeof TransactionTypeRadioIconColors;
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme["gray-700"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["gray-300"]};

    cursor: pointer;

    svg {
        color: ${(props) => props.theme[TransactionTypeRadioIconColors[props.variant]]};
    }

    &[data-state="unchecked"]:hover {
        background-color: ${(props) => props.theme["gray-600"]};

        transition: background-color 0.2s;
    }

    &[data-state="checked"] {
        background-color: ${(props) =>
            props.theme[TrasactionTypeCheckedRadioBackgroundColor[props.variant]]};

        color: ${(props) => props.theme.white};

        svg {
            color: ${(props) => props.theme.white};
        }

        transition: all 0.2s;
    }
`;

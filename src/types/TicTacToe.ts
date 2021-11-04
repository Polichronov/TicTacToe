export type BoardType = {
    squares: (string | null)[],
    onClick: (index: number) => void
}

export type SquareType = {
    value: string | null
    onClick: () => void
}

export type History = {
    squares: (string | null)[]
}
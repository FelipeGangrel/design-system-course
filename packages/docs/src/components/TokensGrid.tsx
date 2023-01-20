import '../styles/tokens-grid.css'

type TokensGridProps = {
  tokens: Record<string, string>
  hasRemValues?: boolean
}

export const TokensGrid = ({
  tokens,
  hasRemValues = false,
}: TokensGridProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasRemValues && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([tokenName, tokenValue]) => (
          <tr key={tokenName}>
            <td>{tokenName}</td>
            <td>{tokenValue}</td>
            {hasRemValues && <td>{parseFloat(tokenValue) * 16} px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

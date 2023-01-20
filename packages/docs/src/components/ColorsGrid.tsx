import '../styles/colors-grid.css'
import { colors } from '@my-design-system/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return (
    <div className="colors-grid">
      {Object.entries(colors).map(([colorName, colorValue]) => (
        <div
          key={colorName}
          className="colors-grid-item"
          style={{
            backgroundColor: colorValue,
            color: getContrast(colorValue, 'white') < 3.5 ? 'black' : 'white',
          }}
        >
          <div>{colorName}</div>
          <div>{colorValue}</div>
        </div>
      ))}
    </div>
  )
}

import propTypes from 'prop-types';
import style from './Statistics.module.css';
// import BgcColor from '../helpers/BgcColor.js';

export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}

        <ul className={style.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={style.item}
              key={id}
              style={{ backgroundColor:  backGroundColor() }}
            >
              <span className={style.label}>{label}</span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function backGroundColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
}

Statistics.propTypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
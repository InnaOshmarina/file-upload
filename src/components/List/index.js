import React, { memo } from 'react';
import T from 'prop-types';

// TODO открывать загруженные файлы  в новой вкладке
const List = memo(props => {
  const { data } = props;
  return (
    <ul>
      {data.map(el => {
        return (
          <li key={el}>
            <a href={el}>{el}</a>
          </li>
        );
      })}
    </ul>
  );
});

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: T.arrayOf(T.string),
};

export default List;

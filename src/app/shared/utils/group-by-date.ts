import { formatDate } from '@angular/common';
export function groupBy(data: [], target: string, by: string = 'month'): any {
  let result = {};
  const dateObj = {
    year: (date: Date) => {
      return formatDate(date, 'yyyy', 'en_US');
    },
    month: (date: Date) => {
      return formatDate(date, 'yyyy-MM', 'en_US');
    },
    day: (date: Date) => {
      return formatDate(date, 'yyyy-MM-dd', 'en_US');
    }
  };

  if (data && data.length > 0) {
    const keys = [];
    const values = {};
    data.map((item: any) => {
      if (typeof item[target] === 'string') {
        item[target] = new Date(item[target]);
      }
      const key = dateObj[by](item[target]);
      if (keys.indexOf(key) < 0) {
        keys.push(key);
        values[key] = [item];
      } else {
        values[key].push(item);
      }
    });

    result = {
      key: keys,
      value: values
    };
  }
  return result;
}

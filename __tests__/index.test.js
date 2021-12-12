const nextCronTime = require('../index')
describe('nextCronTime', () => {
  test.each([
    // minute hour date month dow
    ['* * * * *', '2000/01/01 00:00:00', '2000/01/01 00:01:00'],
    ['0 * * * *', '2000/01/01 00:00:00', '2000/01/01 01:00:00'],
    ['1 * * * *', '2000/01/01 00:00:00', '2000/01/01 00:01:00'],
    ['0/20 * * * *', '2000/01/01 00:01:00', '2000/01/01 00:20:00'],
    ['*/20 * * * *', '2000/01/01 00:21:00', '2000/01/01 00:40:00'],
    ['2/20 * * * *', '2000/01/01 00:00:00', '2000/01/01 00:02:00'],
    ['2/20 * * * *', '2000/01/01 00:03:00', '2000/01/01 00:22:00'],
    ['40-50 * * * *', '2000/01/01 00:03:00', '2000/01/01 00:40:00'],
    ['3,5,7,11 * * * *', '2000/01/01 00:00:00', '2000/01/01 00:03:00'],
    ['3,5,7,20-30 * * * *', '2000/01/01 00:10:00', '2000/01/01 00:20:00'],
    ['3,5,7,20-30 * * * *', '2000/01/01 00:30:00', '2000/01/01 01:03:00'],
    ['* 1 * * *', '2000/01/01 00:00:00', '2000/01/01 01:00:00'],
    ['* 0/2 * * *', '2000/01/01 00:00:00', '2000/01/01 00:01:00'],
    ['0 0/2 * * *', '2000/01/01 00:00:00', '2000/01/01 02:00:00'],
    ['* 1/2 * * *', '2000/01/01 00:00:00', '2000/01/01 01:00:00'],
    ['* 12-14 * * *', '2000/01/01 00:00:00', '2000/01/01 12:00:00'],
    ['* 12-14 * * *', '2000/01/01 15:00:00', '2000/01/02 12:00:00'],
    ['0 0 1 * *', '2000/01/01 00:00:00', '2000/02/01 00:00:00'],
    ['0 0 31 * *', '2000/01/01 00:00:00', '2000/01/31 00:00:00'],
    ['0 0 31 * *', '2000/02/01 00:00:00', '2000/03/31 00:00:00'],
    ['0 0 L * *', '2000/02/01 00:00:00', '2000/02/29 00:00:00'],
    ['0 0 W * *', '2021/12/01 00:00:00', '2021/12/02 00:00:00'],
    ['0 0 2W * *', '2021/12/01 00:00:00', '2021/12/02 00:00:00'],
    ['0 0 3W * *', '2021/12/01 00:00:00', '2021/12/03 00:00:00'],
    ['0 0 4W * *', '2021/12/01 00:00:00', '2021/12/06 00:00:00'],
    ['0 0 W * *', '2021/12/11 00:00:00', '2021/12/13 00:00:00'],
    ['0 0 1 1 *', '2000/01/01 00:00:00', '2001/01/01 00:00:00'],
    ['0 0 1 1 *', '2000/12/31 23:59:59', '2001/01/01 00:00:00'],
    ['15 20 * * *', '2021/12/11 16:08:00', '2021/12/11 20:15:00'],
    ['0 8 * 1 *', '2021/12/11 16:08:00', '2022/1/1 08:00:00'],
    ['*/20 8-17 * * 2-6', '2021/12/11 16:08:00', '2021/12/13 08:00:00'],
    ['*/20 8-17 * * 2-6', '2021/12/13 16:08:00', '2021/12/13 16:20:00'],
    ['* * * * 1', '2021/12/01 00:00:00', '2021/12/05 00:00:00'],
    ['* * * * 1#2', '2021/12/01 00:00:00', '2021/12/12 00:00:00'],
    ['* * * * 1#3', '2021/12/01 00:00:00', '2021/12/19 00:00:00'],
  ])('nextCronTime(%s, %s) => %s', (format, date, want) => {
    expect(nextCronTime(format, new Date(date))).toEqual(new Date(want))
  })
})

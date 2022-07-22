// {
//   "blue-1": "#E5F3FF",
//   "blue-2": "#CBE4F5",
//   "blue-3": "#95C4E5",
//   "blue-4": "#397AB2",
//   "blue-5": "#1C6399",
//   "blue-6": "#004E7F",
//   "blue-7": "#02416B",
//   "blue-8": "#013659",
//   "blue-9": "#002E4D",
//   "blue-10": "#00253D",
//   "primary-1": "#E5F3FF",
//   "primary-2": "#CBE4F5",
//   "primary-3": "#95C4E5",
//   "primary-4": "#397AB2",
//   "primary-5": "#1C6399",
//   "primary-6": "#004E7F",
//   "primary-7": "#02416B",
//   "primary-8": "#013659",
//   "primary-9": "#002E4D",
//   "primary-10": "#00253D",
//   "gray-2": "#F0F2F5",
//   "gray-3": "#E4E9ED",
//   "gray-4": "#D3DBE5",
//   "gray-5": "#BCC6D1",
//   "gray-6": "#9AA4B2",
//   "gray-7": "#75808F",
//   "gray-8": "#505866",
//   "gray-9": "#272C36",
//   "brand-primary": "#004E7F"
// }

const COLORS = {
  blue: [
    '#E5F3FF',
    '#CBE4F5',
    '#95C4E5',
    '#397AB2',
    '#1C6399',
    '#004E7F',
    '#02416B',
    '#013659',
    '#002E4D',
    '#00253D',
  ],
  primary: [
    '#E5F3FF',
    '#CBE4F5',
    '#95C4E5',
    '#397AB2',
    '#1C6399',
    '#004E7F',
    '#02416B',
    '#013659',
    '#002E4D',
    '#00253D',
  ],
  gray: ['#F0F2F5', '#E4E9ED', '#D3DBE5', '#BCC6D1', '#9AA4B2', '#75808F', '#505866', '#272C36'],
}

const keys = Object.keys(COLORS)

const result = {}

keys.forEach((key) => {
  const arr = COLORS[key]
  arr.forEach((val, idx) => {
    if (key === 'gray') {
      result[`${key}-${idx + 2}`] = val
    }
    result[`${key}-${idx + 1}`] = val
  })
})

// antd-mobile
result['brand-primary'] = '#004E7F'

const primaryText = 'rgba(0,0,0,0.65)'

module.exports = { result, COLORS, primaryText }

import { Field, Input, Label } from '@headlessui/react';
import { FormEvent, useMemo, useState } from 'react';
import LKD from '../common/LKD';
import Table from '../common/Table';

const Question = ({ ...props }) => {
  const header = [
    { label: 'Symbol', key: 'symbol' },
    { label: 'Value', key: 'value' },
  ];

  const dataTable = [
    { symbol: 'I', value: 1 },
    { symbol: 'V', value: 5 },
    { symbol: 'X', value: 10 },
    { symbol: 'L', value: 50 },
    { symbol: 'C', value: 100 },
    { symbol: 'D', value: 500 },
    { symbol: 'M', value: 1000 },
  ];

  const questionList = [
    <div key={1} className='leading-8 overflow-auto  h-full max-h-[70vh]'>
      Given two arrays <LKD>arr1</LKD> and <LKD>arr2</LKD>, the elements of <LKD>arr2</LKD> are distinct, and all elements in <LKD>arr2</LKD> are also in <LKD>arr1</LKD>. Sort the elements of <LKD>arr1</LKD> such that the relative ordering of items in <LKD>arr1</LKD> are the same as in{' '}
      <LKD>arr2</LKD>. Elements that do not appear in <LKD>arr2</LKD> should be placed at the end of <LKD>arr1</LKD> in ascending order.
      <br />
      <div className='py-4'>
        <h6 className='font-semibold'>Example 1:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
          <br />
          <span className='font-bold'>Output:</span> [2,2,2,1,4,3,3,9,6,7,19]
          <br />
        </p>
      </div>
      <div className='py-4'>
        <h6 className='font-semibold'>Example 2:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
          <br />
          <span className='font-bold'>Output:</span> [22,28,8,6,17,44]
          <br />
        </p>
      </div>
      <h6 className='font-semibold'>Constraints:</h6>
      <ul className='list-disc px-4'>
        <li>
          <LKD>1 &lt;= arr1.length, arr2.length &lt;= 1000</LKD>
        </li>
        <li>
          <LKD>0 &lt;= arr1[i], arr2[i] &lt;= 1000</LKD>
        </li>
        <li>
          All the elements of <LKD>arr2</LKD> are distinct.
        </li>
        <li>
          Each <LKD>arr2[i]</LKD> is in <LKD>arr1</LKD>.
        </li>
      </ul>
    </div>,
    <div key={1} className='leading-8 overflow-auto h-full max-h-[70vh]'>
      You are given an integer array <LKD>score</LKD> of size <LKD>n</LKD>, where <LKD>score[i]</LKD> is the score of the ith athlete in a competition. All the scores are guaranteed to be <span className='font-semibold'>unique</span>.
      <br />
      The athletes are placed based on their scores, where the{' '}
      <LKD>
        1<sup>st</sup>
      </LKD>{' '}
      place athlete has the highest score, the{' '}
      <LKD>
        2<sup>nd</sup>
      </LKD>{' '}
      place athlete has the{' '}
      <LKD>
        2<sup>nd</sup>
      </LKD>{' '}
      highest score, and so on. The placement of each athlete determines their rank:
      <br />
      <ul className='list-disc px-4'>
        <li>
          The{' '}
          <LKD>
            1<sup>st</sup>
          </LKD>{' '}
          place athlete&apos;s rank is <LKD>&quot;Gold Medal&quot;</LKD>.
        </li>
        <li>
          The{' '}
          <LKD>
            2<sup>nd</sup>
          </LKD>{' '}
          place athlete&apos;s rank is <LKD>&quot;"Silver Medal&quot;</LKD>.
        </li>
        <li>
          The{' '}
          <LKD>
            3<sup>rd</sup>
          </LKD>{' '}
          place athlete&apos;s rank is <LKD>&quot;Bronze Medal&quot;</LKD>.
        </li>
        <li>
          For the{' '}
          <LKD>
            4<sup>th</sup>
          </LKD>{' '}
          place to the{' '}
          <LKD>
            n<sup>th</sup>
          </LKD>{' '}
          place athlete, their rank is their placement number (i.e., the{' '}
          <LKD>
            x<sup>th</sup>
          </LKD>{' '}
          place athlete&apos;s rank is <LKD>"x"</LKD>).
        </li>
      </ul>
      Return an array <LKD>answer</LKD> of size <LKD>n</LKD> where <LKD>answer[i]</LKD> is the rank of the{' '}
      <LKD>
        i<sup>th</sup>
      </LKD>{' '}
      athlete.
      <br />
      <div className='py-4'>
        <h6 className='font-semibold'>Example 1:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> score = [5,4,3,2,1]
          <br />
          <span className='font-bold'>Output:</span> [&quot;Gold Medal&quot;,&quot;Silver Medal&quot;,&quot;Bronze Medal&quot;,&quot;4&quot;,&quot;5&quot;]
          <br />
          <span className='font-bold'>Explanation:</span> The placements are [1st, 2nd, 3rd, 4th, 5th].
          <br />
        </p>
      </div>
      <div className='py-4'>
        <h6 className='font-semibold'>Example 2:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> score = [10,3,8,9,4]
          <br />
          <span className='font-bold'>Output:</span> ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
          <br />
          <span className='font-bold'>Explanation:</span> The placements are [1st, 5th, 3rd, 2nd, 4th].
          <br />
        </p>
      </div>
      <h6 className='font-semibold'>Constraints:</h6>
      <ul className='list-disc px-4'>
        <li>
          <LKD>n == score.length</LKD>
        </li>
        <li>
          <LKD>
            {`1 <= n <= 10`}
            <sup>4</sup>
          </LKD>
        </li>
        <li>
          <LKD>
            {`0 <= score[i] <= 10`}
            <sup>6</sup>
          </LKD>
        </li>
        <li>
          Each <LKD>arr2[i]</LKD> is in <LKD>arr1</LKD>.
        </li>
      </ul>
    </div>,

    <div key={1} className='leading-8 overflow-auto h-full max-h-[70vh]'>
      Seven different symbols represent Roman numerals with the following values:
      <Table header={header} data={dataTable} />
      Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:
      <br />
      <ul className='list-disc px-4'>
        <li>If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.</li>
        <li>
          If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (<LKD>I</LKD>) less than 5 (<LKD>V</LKD>): <LKD>IV</LKD> and 9 is 1 (<LKD>I</LKD>) less than 10 (<LKD>X</LKD>): <LKD>IX</LKD>. Only the following
          subtractive forms are used: 4 (<LKD>IV</LKD>), 9 (<LKD>IX</LKD>), 40 (<LKD>XL</LKD>), 90 (<LKD>XC</LKD>), 400 (<LKD>CD</LKD>) and 900 (<LKD>CM</LKD>).
        </li>
        <li>
          Only powers of 10 (<LKD>I</LKD>, <LKD>X</LKD>, <LKD>C</LKD>, <LKD>M</LKD>) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (<LKD>V</LKD>), 50 (L<LKD>L</LKD>), or 500 (<LKD>D</LKD>) multiple times. If you need to append a symbol 4 times use
          the <span className='font-bold'>subtractive form</span>.
        </li>
      </ul>
      Given an integer, convert it to a Roman numeral.
      <br />
      <div className='py-4'>
        <h6 className='font-semibold'>Example 1:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> num = 3749
          <br />
          <span className='font-bold'>Output:</span> &quot;MMMDCCXLIX&quot;
          <br />
          <span className='font-bold'>Explanation:</span>
          <br />
          3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
          <br />
          700 = DCC as 500 (D) + 100 (C) + 100 (C)
          <br />
          40 = XL as 10 (X) less of 50 (L)
          <br />9 = IX as 1 (I) less of 10 (X)
          <br />
          Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
          <br />
        </p>
      </div>
      <div className='py-4'>
        <h6 className='font-semibold'>Example 2:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> num = 58
          <br />
          <span className='font-bold'>Output:</span> &quot;LVIII&quot;
          <br />
          <span className='font-bold'>Explanation:</span>
          <br />
          50 = L
          <br />8 = VIII
        </p>
      </div>
      <div className='py-4'>
        <h6 className='font-semibold'>Example 3:</h6>
        <p className='pl-2 border-l-4 border-white/50'>
          <span className='font-bold'>Input:</span> num = 1994
          <br />
          <span className='font-bold'>Output:</span> &quot;MCMXCIV&quot;
          <br />
          <span className='font-bold'>Explanation:</span>
          <br />
          1000 = M
          <br />
          900 = CM
          <br />
          90 = XC
          <br />4 = IV
        </p>
      </div>
      <h6 className='font-semibold'>Constraints:</h6>
      <ul className='list-disc px-4'>
        <li>
          <LKD>{`1 <= num <= 3999`}</LKD>
        </li>
      </ul>
    </div>,
  ];

  const [arr1Q1, setArr1Q1] = useState<string>('');
  const [arr2Q1, setArr2Q1] = useState<string>('');
  const relativeSortArr = (arr1: number[], arr2: number[]): number[] => {
    console.log(arr1.length === 0 && arr2.length === 0);
    if (arr1.length === 0 && arr2.length === 0) return [];
    const map = arr2.reduce<Record<number, number>>((acc, cur, i) => {
      return { ...acc, [cur]: i };
    }, {});
    const data = arr1.sort((a, b) => {
      a = map.hasOwnProperty(a) ? map[a] : arr2.length + a;
      b = map.hasOwnProperty(b) ? map[b] : arr2.length + b;
      return a - b;
    });
    return data.length > 0 ? data : arr2;
  };

  const solveQ1 = useMemo(() => {
    const dataArray1 = arr1Q1.split(',').filter((num) => num !== '');
    const arr1 = dataArray1.length > 0 ? dataArray1.map((num) => parseInt(num)) : [];
    const dataArray2 = arr2Q1.split(',').filter((num) => num !== '');
    const arr2 = dataArray2.length > 0 ? dataArray2.map((num) => parseInt(num)) : [];
    return `[${relativeSortArr(arr1, arr2)}]`;
  }, [arr1Q1, arr2Q1]);

  const [arr1Q2, setArr1Q2] = useState<string>('');
  function findRelativeRanks(score: number[]): string[] {
    const sortedScores = [...score].sort((a, b) => b - a);
    const rankMap = new Map<number, string>();

    sortedScores.forEach((value, index) => {
      if (index === 0) {
        rankMap.set(value, 'Gold Medal');
      } else if (index === 1) {
        rankMap.set(value, 'Silver Medal');
      } else if (index === 2) {
        rankMap.set(value, 'Bronze Medal');
      } else {
        rankMap.set(value, (index + 1).toString());
      }
    });

    return score.map((value) => rankMap.get(value) as string);
  }
  const solveQ2 = useMemo(() => {
    const dataArray1 = arr1Q2.split(',').filter((num) => num !== '');
    return `[${findRelativeRanks(dataArray1.length > 0 ? dataArray1.map((num) => parseInt(num)) : [])}]`;
  }, [arr1Q2]);

  const [numQ3, setNumQ3] = useState<string>('');
  function intToRoman(num: number): string {
    const romanNumerals: { value: number; numeral: string }[] = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];

    let result = '';
    for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }
  const solveQ3 = useMemo(() => {
    return intToRoman(parseInt(numQ3));
  }, [numQ3]);
  const solutionList = [
    <div key={1} className='overflow-auto h-full flex flex-col gap-2 leading-8 max-h-[70vh]'>
      <pre className='bg-gray-800 text-white p-4 rounded'>
        <code>
          {`const relativeSortArr = (arr1: number[], arr2: number[]): 
number[] => {
  const map = arr2.reduce<Record<number, number>>(
  (acc, cur, i) => {
    return { ...acc, [cur]: i };
  }, {});
  const data = arr1.sort((a, b) => {
  a = map.hasOwnProperty(a) ? map[a] : arr2.length + a;
  b = map.hasOwnProperty(b) ? map[b] : arr2.length + b;
  return a - b;
  });
  return data;
};`}
        </code>
      </pre>
      <div className='grid grid-cols-2 gap-2'>
        <Field className='grid gap-2'>
          <Label>Input Array 1</Label>
          <Input
            value={arr1Q1}
            className='text-slate-300 px-2 py-1 border border-white  bg-transparent'
            onInput={(e: FormEvent<HTMLInputElement>) => {
              const input = (e.target as HTMLInputElement).value;
              if (/^(?:\d+(?:,\d+)*,?)?$/.test(input)) {
                setArr1Q1(input);
              }
            }}
          />
        </Field>

        <Field className='grid gap-2'>
          <Label>Input Array 2</Label>
          <Input
            value={arr2Q1}
            className='text-slate-300 px-2 py-1 border border-white  bg-transparent rounded'
            onInput={(e: FormEvent<HTMLInputElement>) => {
              const input = (e.target as HTMLInputElement).value;
              if (/^(?:\d+(?:,\d+)*,?)?$/.test(input)) {
                setArr2Q1(input);
              }
            }}
          />
        </Field>
      </div>
      <label>Result</label>
      <div className='border border-white rounded px-2 py-1'>{solveQ1}</div>
    </div>,
    <div key={2} className='overflow-auto h-full  flex flex-col gap-2 leading-8 max-h-[70vh]'>
      <pre className='bg-gray-800 text-white p-4 rounded'>
        <code>
          {`function findRelativeRanks(score: number[]): string[] {
  const sortedScores = [...score].sort((a, b) => b - a);
  const rankMap = new Map<number, string>();

  sortedScores.forEach((value, index) => {
    if (index === 0) {
      rankMap.set(value, 'Gold Medal');
    } else if (index === 1) {
      rankMap.set(value, 'Silver Medal');
    } else if (index === 2) {
      rankMap.set(value, 'Bronze Medal');
    } else {
      rankMap.set(value, (index + 1).toString());
    }
  });

  return score.map((value) => rankMap.get(value) as string);
}`}
        </code>
      </pre>
      <div className='grid grid-cols-2 gap-2'>
        <Field className='grid gap-2'>
          <Label>Input Array 1</Label>
          <Input
            value={arr1Q2}
            className='text-slate-300 px-2 py-1 border border-white  bg-transparent'
            onInput={(e: FormEvent<HTMLInputElement>) => {
              const input = (e.target as HTMLInputElement).value;
              if (/^(?:\d+(?:,\d+)*,?)?$/.test(input)) {
                setArr1Q2(input);
              }
            }}
          />
        </Field>

        <div className='grid gap-2'>
          <label>Result</label>
          <div className='border border-white rounded px-2 py-1'>{solveQ2}</div>
        </div>
      </div>
    </div>,
    <div key={3} className='overflow-auto h-full  flex flex-col gap-2 leading-8 max-h-[70vh]'>
      <pre className='bg-gray-800 text-white p-4 rounded'>
        <code>
          {`function intToRoman(num: number): string {
  const romanNumerals: { value: number; numeral: string }[] = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}`}
        </code>
      </pre>
      <div className='grid grid-cols-2 gap-2'>
        <Field className='grid gap-2'>
          <Label>Input Number</Label>
          <Input
            value={numQ3}
            className='text-slate-300 px-2 py-1 border border-white  bg-transparent'
            onInput={(e: FormEvent<HTMLInputElement>) => {
              const input = (e.target as HTMLInputElement).value;
              if (/^\d+$/.test(input)) {
                setNumQ3(input);
              } else if (input === '') {
                setNumQ3('');
              }
            }}
          />
        </Field>

        <div className='flex flex-col gap-2'>
          <label>Result</label>
          <div className='border border-white rounded px-2 py-1 h-full'>{solveQ3}</div>
        </div>
      </div>
    </div>,
  ];
  return (
    <div className='w-[70vw] grid grid-cols-2 border-white rounded-lg border px-4 divide-x'>
      <div className='py-4 pr-4 flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>Problem</h1>
        {questionList[props.selectedQuestion - 1]}
      </div>
      <div className='pl-4 py-4 flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>Solution</h1>
        {solutionList[props.selectedQuestion - 1]}
      </div>
    </div>
  );
};

export default Question;

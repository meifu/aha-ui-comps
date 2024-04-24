import { useState } from 'react';

import debounce from '../utils/debounce';

interface RuleType {
  regex: RegExp;
  msg: string;
}

const rules: RuleType[] = [
  {
    regex: new RegExp('.*[A-Z].*'),
    msg: 'Have at least one uppercase letter',
  },
  {
    regex: new RegExp('.*[a-z].*'),
    msg: 'Have at least one lowercase letter',
  },
  {
    regex: new RegExp('.*[0-9].*'),
    msg: 'Have at least one number',
  },
  {
    regex: new RegExp('.*[#$@!%&*?+^~()].*'),
    msg: 'Have at least one special character (!@#$...etc)',
  },
  {
    regex: new RegExp('.{8,}'),
    msg: 'Longer than 8 charaters',
  },
];

interface RuleCheckType {
  value: string;
  rule: RuleType;
}

function RuleCheck({
  value = '',
  rule = { regex: /./g, msg: '' },
}: RuleCheckType) {
  const { regex, msg } = rule;
  const passed = regex.test(value);

  return (
    <div className="flex flex-none items-center py-1 mb-2 last:mb-0">
      {passed ? (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-testid={`${msg}-pass`}
        >
          <circle cx="12" cy="12" r="10.5" className="fill-sky-500" />
          <polyline
            points="6.27 12 10.09 15.82 17.73 8.18"
            className="stroke-2 stroke-neutral-800 fill-none"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-6 h-6 stroke-zinc-500"
          data-testid={`${msg}-fail`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
      <span className="leading-6 ml-3">{msg}</span>
    </div>
  );
}

export default function Password() {
  const [val, setVal] = useState('');

  const debounceChange = debounce((theVal: any) => setVal(theVal), 800);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const theVal = e.currentTarget?.value;
    debounceChange(theVal);
  };

  return (
    <div className="max-w-md">
      <label
        htmlFor="pw"
        className="relative inline-block text-sm bg-black p-1 -bottom-4 left-3"
      >
        Password
      </label>
      <input
        id="pw"
        name="pw"
        type="password"
        placeholder="Password"
        className="w-full border-2 border-gray-500 hover:border-white active:border-sky-500 focus:border-sky-500 focus-visible:outline-none rounded-md text-lg bg-black p-4"
        onChange={handleChange}
      />
      <div className="w-full rounded-md bg-neutral-800 mt-4 p-4">
        {rules.map((rule) => (
          <RuleCheck key={rule.msg} value={val} rule={rule} />
        ))}
      </div>
    </div>
  );
}

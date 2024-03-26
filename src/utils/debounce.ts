function debounce(func: any, time: number = 500) {
  let timerID: NodeJS.Timeout | undefined;

  return (args: any) => {
    clearTimeout(timerID);

    timerID = setTimeout(() => {
      func(args);
    }, time);
  }
}

export default debounce;
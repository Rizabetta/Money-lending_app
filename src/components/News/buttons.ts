export function checkBtn(
  position: number,
  limit: number,
  btnLeft: React.RefObject<HTMLButtonElement>,
  btnRight: React.RefObject<HTMLButtonElement>
) {
  if (position === 0) {
    btnLeft.current?.classList.add("disabled");
  } else {
    btnLeft.current?.classList.remove("disabled");
  }
  if (position === -limit) {
    btnRight.current?.classList.add("disabled");
  } else {
    btnRight.current?.classList.remove("disabled");
  }
}

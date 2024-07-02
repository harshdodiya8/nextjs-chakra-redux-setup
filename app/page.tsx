// "use client"
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/store/store-hooks";
import { decrement, increment } from "@/lib/store/features/counter/counterExampleSlice";

// Note - if we are exporting metadata, then this component or page should be server
export const metadata = {
  title: 'any title',
  description: 'any description',
  openGraph: {
    type: 'website'
  }
};

export default async function Home() {

  // make sure to make the component as client component when we use this hooks
  // const temp = useAppSelector(state => state.counter)
  // const { value, isLoading} = temp
  // const dispatch = useAppDispatch()
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}> */}
        {/* 
        example =====================================================

        <h1>{value}</h1>
        {isLoading ? <h1>loading</h1>: null}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> 
        
        =============================================================
        */}
      {/* </div> */}
    </main>
  );
}

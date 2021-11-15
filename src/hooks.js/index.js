import { useState, useEffect, useMemo } from "react";

let listenerCallbacks = new WeakMap();

let observer;

function handleIntersections(entries) {
  entries.forEach(entry => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listenerCallbacks.delete(entry.target);
        cb(entry.target);
      }
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, {
      rootMargin: '100px',
      threshold: '0.15',
    });
  }
  return observer;
}

export const useIntersection = (elem, callback) => {
  useEffect(() => {
    let target = elem.current;
    let observer = getIntersectionObserver();
    listenerCallbacks.set(target, callback);
    observer.observe(target);
    console.log(listenerCallbacks);

    return () => {
      listenerCallbacks.delete(target);
      observer.unobserve(target);
    };
  }, []);
}


// export const useLazyLoadImage = () => {

//   const observer = useMemo(()=> {

//     const observerCallback = (entries) => {

//       entries.forEach(element => {
//         element.style
//       });




//     }

//     const observer = new IntersectionObserver(observerCallback)


//     return observer

//   }, [])


//   return { observer }

// }


export const useAppLanguage = () => {
  const [appLanguage, setAppLanguage] = useState(null);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("app-language");

    if (!savedLanguage) {
      const navigatorLanguage = navigator.language;
      window.localStorage.setItem("app-language", navigatorLanguage);
      setAppLanguage(navigatorLanguage);
      return;
    }

    setAppLanguage(savedLanguage);
  }, []);

  const changeLanguage = (newLanguage) => {
    window.localStorage.setItem("app-language", newLanguage);
    setAppLanguage(newLanguage);
  };

  return { value: appLanguage, changeLanguage };
};

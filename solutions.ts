export const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier ?? 2);
};
// ----------------------------//

export const processInput = (
  input: string | number | boolean,
): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
};
// ----------------------------//

export const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
// ----------------------------//

export const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combinedArray: T[] = [];

  for (const currentArray of arrays) {
    combinedArray.push(...currentArray);
  }

  return combinedArray;
};
// ----------------------------//

export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );
};
// ----------------------------//

export const pluckValues = <T, K extends keyof T>(
  items: T[],
  key: K,
): T[K][] => {
  return items.map((item: T): T[K] => item[key]);
};
// ----------------------------//

export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}
// ----------------------------//

export const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject): void => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }

    setTimeout((): void => {
      resolve("Access Granted");
    }, 1000);
  });
};

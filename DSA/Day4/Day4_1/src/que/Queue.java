package que;

public class Queue {  
							
	private int data[];
	private int r, f;

	public Queue(int size) {
		data = new int[size];
		r = f = -1;
	}

	public int getR() {
		return r;
	}

	public void setR(int r) {
		this.r = r;
	}

	public int getF() {
		return f;
	}

	public void setF(int f) { 
		this.f = f;
	}

	public void enque(int v) {
		if (isFull()) {
			System.out.println("Queue is Full");
			return;
		}
		// when first time enqueue will be called
		if (r == -1)
			f = 0;
		// in every call of enqueue
		data[++r] = v;

	}

	public int deque() {
		if (isEmpty()) {
			System.out.println("Queue is Empty");
			return -1;
		}
		int v = data[f++];
		if (f == r + 1) // if elements in queue are 5 and user gives dequeue(6),then f will be +1 than
						// rear
			r = f = -1; // Hence rear and front are set to -1 i.e. list is empty
		return v;

	}

	public int peak() {
		if (isEmpty()) {
			System.out.println("\nQueue is Empty");
			return -1;
		}
		return data[f];

	}

	public boolean isEmpty() {
		if (r == -1)
			return true;
		return false;
	}

	public boolean isFull() {
		if (r == data.length - 1)
			return true;
		return false;

	}

	public void display() {
		if (isEmpty()) {
			System.out.println("Queue is Empty");
			return;
		}
		System.out.print("Queue Elements :");
		for (int i = f; i <= r; i++) {
			System.out.print("\t" + data[i]);

		}
	}
}

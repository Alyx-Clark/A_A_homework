class Queue
    attr_reader :arry
    def initialize
        @arry = []
    end

    def enqueue(el)
        arry << el
    end

    def dequeue
        arry.shift
    end

    def peek
        arry.last
    end
end
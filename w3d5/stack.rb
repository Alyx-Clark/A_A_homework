class Stack
    attr_reader :store
    def initialize
        @arry = []
    end

    def push(el)
        arry << el
    end

    def pop
        arry.pop
    end

    def peek
        arry[-1]
    end
end
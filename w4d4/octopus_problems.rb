
array = ["fish", "fiiish", "fiiiiish", "fffish", "ffiiiiisshh", "fsh", "fiiiissshhhhhh"]


def sluggish(array) #O(n^2)
    longest_fish = array[0]
    array.each do |fish|
        array.each do |fish2|
            longest_fish = fish if fish.length > fish2.length
        end
    end
    longest_fish
end
p sluggish(array)  # "fiiiissshhhhhh"


class Array
    def merge_sort(&prc)
      prc ||= Proc.new { |x, y| x <=> y }
  
      return self if count <= 1
  
      midpoint = count / 2
      sorted_left = self.take(midpoint).merge_sort(&prc)
      sorted_right = self.drop(midpoint).merge_sort(&prc)
  
      Array.merge(sorted_left, sorted_right, &prc)
    end
  
    private
    def self.merge(left, right, &prc)
      merged = []
  
      until left.empty? || right.empty?
        case prc.call(left.first, right.first)
        when -1
          merged << left.shift
        when 0
          merged << left.shift
        when 1
          merged << right.shift
        end
      end
  
      merged.concat(left)
      merged.concat(right)
  
      merged
    end
end

  
  def nlogn_biggest_fish(fishes)
    prc = Proc.new { |x, y| y.length <=> x.length }
    fishes.merge_sort(&prc)[0]
  end


def clever(array) # O(n)
    hash = {}
    array.each{|fish| hash[fish] = fish.length}
    hash.max_by {|fish,length| length}[0]
end
p clever(array)


tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, array) 
    array.each do |ele|
        return array.index(ele) if ele == dir
    end
end
p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)


def constant_dance(dir, array)
    tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}
    tiles_hash[dir]
end
p constant_dance("up", tiles_array)
p constant_dance("right-down", tiles_array)